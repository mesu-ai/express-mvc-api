# express-mvc-api
Node.js MVC API with Express and TypeScript

Folder Structure

├── src/
│   ├── config/
│   │   ├── database.ts          # Database configuration
│   │   ├── environment.ts       # Environment variables
│   │   └── index.ts            # Export all configs
│   ├── controllers/
│   │   ├── authController.ts    # Authentication logic
│   │   ├── productController.ts # Product business logic
│   │   ├── userController.ts    # User business logic
│   │   ├── orderController.ts   # Order business logic
│   │   └── index.ts            # Export all controllers
│   ├── middleware/
│   │   ├── auth.ts             # Authentication middleware
│   │   ├── validation.ts       # Input validation
│   │   ├── errorHandler.ts     # Global error handling
│   │   ├── logger.ts           # Request logging
│   │   └── index.ts            # Export all middleware
│   ├── models/
│   │   ├── User.ts             # User data model
│   │   ├── Product.ts          # Product data model
│   │   ├── Order.ts            # Order data model
│   │   └── index.ts            # Export all models
│   ├── routes/
│   │   ├── auth.ts             # Authentication routes
│   │   ├── products.ts         # Product routes
│   │   ├── users.ts            # User routes
│   │   ├── orders.ts           # Order routes
│   │   └── index.ts            # Main router
│   ├── services/
│   │   ├── authService.ts      # Authentication business logic
│   │   ├── productService.ts   # Product business logic
│   │   ├── userService.ts      # User business logic
│   │   ├── orderService.ts     # Order business logic
│   │   └── index.ts            # Export all services
│   ├── types/
│   │   ├── auth.ts             # Authentication types
│   │   ├── product.ts          # Product types
│   │   ├── user.ts             # User types
│   │   ├── order.ts            # Order types
│   │   └── index.ts            # Export all types
│   ├── utils/
│   │   ├── helpers.ts          # Utility functions
│   │   ├── constants.ts        # Application constants
│   │   ├── validators.ts       # Custom validators
│   │   └── index.ts            # Export all utils
│   ├── data/
│   │   ├── products.json       # Mock product data
│   │   ├── users.json          # Mock user data
│   │   └── orders.json         # Mock order data
│   └── app.ts                  # Express app setup
├── tests/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   └── setup.ts
├── docs/
│   ├── api.md                  # API documentation
│   └── deployment.md          # Deployment guide
├── .env.example               # Environment variables template
├── .gitignore                # Git ignore file
├── package.json              # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── nodemon.json             # Nodemon configuration
├── README.md                # Project documentation
└── server.ts                # Entry point