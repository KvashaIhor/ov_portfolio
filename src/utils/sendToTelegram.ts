// utils/sendToTelegram.ts
export const sendToTelegram = async (formData: {
    name: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    const token = '6091325049:AAHitQDKgnKiIIbl4tNZCCQtGavSc5cKT2o'; // Replace with your bot token
    const chatId = '242445889';  // Replace with your Telegram user ID or channel ID
  
    const text = `
  📬 *New Contact Form Submission*
  👤 *Name:* ${formData.name}
  📞 *Phone:* ${formData.phone}
  📦 *Service:* ${formData.service}
  📝 *Message:*\n${formData.message}
  `;
  
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      });
  
      if (!res.ok) throw new Error('Failed to send message');
      return true;
    } catch (err) {
      console.error('Telegram error:', err);
      return false;
    }
  };
  