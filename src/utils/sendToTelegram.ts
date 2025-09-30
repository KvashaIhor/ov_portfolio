
export const sendToTelegram = async (formData: {
    name: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram configuration missing. Please check your environment variables.');
      return false;
    } 
  
    const text = `
  📬 *New Contact Form Submission*
  👤 *Name:* ${formData.name}
  📞 *Phone:* ${formData.phone}
  📦 *Service:* ${formData.service}
  📝 *Message:*\n${formData.message}
  `;
  
    const url = `https://api.telegram.org/bot${token}/sendMessage`;//api.telegram.org/bot${token}/sendMessage`;
  
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
  