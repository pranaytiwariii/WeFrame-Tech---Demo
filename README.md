# Geer Intern Assignment

## How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser and visit:**
   ```
   http://localhost:3000/products
   ```
   to view the product listing page.

## Tech Stack Used

- **Next.js (App Router)** – React framework for SSR/SSG and API routes
- **TypeScript** – Type safety
- **React** – UI library
- **CSS (with optional Tailwind CSS)** – Styling and responsiveness

## Notes & Assumptions

- The backend uses Next.js API routes and an in-memory array (in `app/api/products/data.ts`) as a temporary database. Data will reset on server restart.
- Product images use placeholder paths (e.g., `/images/gold-necklace.png`). Add your own images in the `public/images` folder for real display.
- The `/products` page fetches products from the backend and displays them. Clicking a product shows its details on `/products/[id]`.
- No authentication or persistent database is implemented (for demo purposes).
- The project is structured for easy extension (e.g., adding search, filter, or cart functionality).

---

**Feel free to reach out if you have any questions or need further improvements!**
