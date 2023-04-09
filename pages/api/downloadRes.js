const { join } = require('path');
const { createReadStream } = require('fs');

export default function handler(req, res) {
  const filePath = join(process.cwd(), 'public/Resume-1.pdf');
  const fileName = 'Resume.pdf';

  res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  res.setHeader('Content-Type', 'application/pdf');

  const stream = createReadStream(filePath);
  stream.pipe(res);
}
