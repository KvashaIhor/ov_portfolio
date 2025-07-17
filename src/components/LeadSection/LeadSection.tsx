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
    email: "",
    phone: "",
    type: "",
    date: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleTypeChange(value: string) {
    setForm((prev) => ({ ...prev, type: value }));
    setError("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.type) {
      setError("Please fill out all required fields.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="leadform-fullscreen">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white text-center">
        <h2 className="text-xl font-bold mb-2">Thank you!</h2>
        <p className="text-gray-700">Your inquiry was received. I’ll get back to you soon.</p>
      </div>
      </div>
    );

  return (
    <div className="leadform-fullscreen"><form
  className="w-full max-w-xl mx-auto mt-10 p-6 space-y-4 sm:mx-5"
  onSubmit={handleSubmit}
>
      <h2 className="text-2xl font-bold mb-2 text-center">LET'S TALK ABOUT YOUR SHOOT</h2>
      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div className="space-y-1">
        <Label htmlFor="name">
          Name:<span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
          className = "rounded-none border border-black"
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
        <Label htmlFor="phone">Phone number:<span className="text-red-500">*</span></Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(000) 000-0000"
          className = "rounded-none border border-black"
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
  <InputLabel id="type-select-label" sx={{color: 'black', '&.Mui-focused': { color: 'black' }}}>
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
        <Label htmlFor="message">Comments</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className = "rounded-none border border-black"
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
