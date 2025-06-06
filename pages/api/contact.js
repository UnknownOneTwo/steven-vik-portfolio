export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Basic response for now
  res.status(200).json({ success: true, message: 'Form received' });
}
