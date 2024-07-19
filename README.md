# Image Classification App

This project consists of a FastAPI backend for handling image uploads and a React frontend for interacting with the backend.

## Prerequisites

- Python 3.7 or later
- Node.js 14 or later
- `pip` (Python package manager)
- `npm` or `yarn` (JavaScript package managers)

## Backend Setup (FastAPI)

1. **Navigate to the backend directory:**

   ```bash
   cd path/to/deeplifyBackend
2. Create a Python virtual environment:

   ```python
   python -m venv venv
3. Activate the virtual enviroment:

   - Windows Command Prompt:
 
   ```bash
   venv\Scripts\activate
   ```
   
   - Windows PowerShell:
 
   ```bash
   .\venv\Scripts\Activate
   ```
   - macOS/Linux:
 
   ```bash
   source venv/bin/activate
   ```
4. Install backend dependencies:
   ```bash
   pip install fastapi uvicorn
   ```
5. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
## Frontedn Setup (React)
1. Navigate to the frontend directory:
   
   ```bash
   cd path/to/frontend
   ```
2. Install frontend dependencies:
   
   If you are using npm:
   
   ```bash
   npm install
   ```

   Or if you are using yarn:
   ```bash
   yarn install
   ```
3. Start the React development server:

   If you are using npm:

   ```bash
   npm start
   ```

   Or if you are using yarn:
   
   ```bash
   yarn start
   ```
   
