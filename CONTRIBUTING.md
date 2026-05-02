# Contributing to ASMH Project

Welcome! To help you understand the project structure instantly, here is the folder map:

```text
ASMH1/
├── backend/               # Node.js + Express API
│   ├── src/
│   │   ├── config/        # DB and cloud configurations
│   │   ├── controllers/   # Route logic
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API endpoints
│   │   └── index.js       # Entry point
│   ├── .env               # Environment variables (Do NOT commit)
│   └── package.json
├── frontend/              # React + Vite application
│   ├── public/            # Static assets (Videos, Favicon)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page layouts
│   │   ├── App.jsx        # Main application component
│   │   └── index.css      # Global styles and Tailwind configuration
│   └── package.json
├── .gitignore             # Global git ignores
├── README.md              # Project documentation
└── package.json           # Root package manager for monorepo scripts
```

## Workflow
1. Create a feature branch (`git checkout -b feature/your-feature`).
2. Commit your changes (`git commit -m 'Add some feature'`).
3. Push to the branch (`git push origin feature/your-feature`).
4. Open a Pull Request.
