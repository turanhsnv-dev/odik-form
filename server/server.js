const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'submissions.json');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Helper: load submissions
function loadSubmissions() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading submissions:', err);
    return [];
  }
}


// Helper: save submissions
function saveSubmissions(submissions) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving submissions:', err);
  }
}

// API: Submit application
app.post('/api/submit', (req, res) => {
  const application = {
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
    ...req.body
  };

  const submissions = loadSubmissions();
  submissions.push(application);
  saveSubmissions(submissions);

  console.log('⚡ Yeni müraciət qəbul edildi:', application);

  res.json({
    success: true,
    message: 'Müraciət qəbul edildi. Odik Ağsaqqallar Şurası 14 iş günü ərzində baxış keçirəcək.',
    id: application.id
  });
});

// API: Get all submissions (for the Odik Council)
app.get('/api/submissions', (req, res) => {
  const submissions = loadSubmissions();
  res.json({ success: true, count: submissions.length, data: submissions });
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Odik Qəbul Portalı aktivdir!`);
  console.log(`🌐 Sayt: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
