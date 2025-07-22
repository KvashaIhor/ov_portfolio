import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import InputLabel from '../../../node_modules/@mui/material/InputLabel';
import MenuItem from '../../../node_modules/@mui/material/MenuItem';
import FormControl from '../../../node_modules/@mui/material/FormControl';
import Select, { SelectChangeEvent } from '../../../node_modules/@mui/material/Select';
import './LeadSection.scss'
import { Footer } from "../Footer/Footer";
import { sendToTelegram } from "../../utils/sendToTelegram";


const shootTypes = [
  "Wedding",
  "Event",
  "Business/Branding",
  "Personal/Portrait",
  "Family",
  "Other",
];

export default function PortfolioLeadForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function formatPhone(value: any) {
    const cleaned = value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
    if (cleaned === '') return '';
    if (cleaned.length < 4) return `(${cleaned}`;
    if (cleaned.length < 7) return `(${cleaned.slice(0,3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
  }
  

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    if (name === "phone") {
      // Strip all non-digits
      let sanitized = value.replace(/\D/g, "");
      // Limit to 10 digits max
      if (sanitized.length > 10) sanitized = sanitized.slice(0, 10);
      setForm({ ...form, [name]: sanitized });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError("");
  }
  
  function handleTypeChange(value: string) {
    setForm((prev) => ({ ...prev, type: value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setError("Please fill out all required fields.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="leadform-fullscreen flex flex-col min-h-screen items-center" id="leadform">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white text-center">
        <h2 className="text-xl font-bold mb-2">Thank you!</h2>
        <p className="text-gray-700">Your inquiry was received. I’ll get back to you soon.</p>
      </div>
      <div className="spacer"></div>
      </div>
    );

  return (
    <div className="leadform-fullscreen min-h-screen flex flex-col justify-center items-center w-full">
  <form className="w-full max-w-xl p-6 space-y-4 sm:mx-5 items-center"
  onSubmit={async (e) => {
    e.preventDefault();
  
    const formData = {
      name: form.name,
      phone: form.phone,
      service: form.type, // 'type' in state matches the select
      message: form.message,
    };
    const sent = await sendToTelegram(formData);
    if (sent) {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again later.');
    }
  }}
>
      <h2 className="text-2xl font-bold mb-2 text-center">LET'S TALK ABOUT YOUR SHOOT</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div className="space-y-1">
        <Label htmlFor="name" className = "fieldlabel">
          Name:<span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className = "rounded-none border border-black field"
        />
      </div>

      {/*<div className="space-y-1">
        <Label htmlFor="email">
          Email<span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ex: myname@example.com"
          required
          className = "rounded-none border border-black"
        />
  </div>*/}

      <div className="space-y-1">
        <Label htmlFor="phone" className = "fieldlabel">Phone number:<span className="text-red-500">*</span></Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formatPhone(form.phone)}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className = "rounded-none border border-black field"
        />
      </div>

      <div className="space-y-1">
      <FormControl fullWidth
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
  }}
>
  <InputLabel id="type-select-label" className = "fieldlabel" sx={{color: 'black', '&.Mui-focused': { color: 'black' }}}>
    Type of shoot
  </InputLabel>
  <Select
    labelId="type-select-label"
    id="type-select"
    value={form.type}
    label="Type of shoot"
    onChange={e => handleTypeChange(e.target.value)}
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
      },
    }}
  >
    <MenuItem value="" disabled>Select type...</MenuItem>
    {shootTypes.map((shoot) => (
      <MenuItem value={shoot} key={shoot}>{shoot}</MenuItem>
    ))}
  </Select>
</FormControl>


      </div>

      {/*<div className="space-y-1">
        <Label htmlFor="date">Preferred date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className = "rounded-none border border-black"
        />
    </div>*/}

      <div className="space-y-1">
        <Label className = "fieldlabel" htmlFor="message">Comment:</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className = "rounded-none border border-black commentfield"
        />
      </div>

      <Button type="submit" className="w-full rounded-none leaverequest">
      <span> LEAVE A REQUEST
                    </span>
      </Button>
    </form>
    </div>
  );
}
