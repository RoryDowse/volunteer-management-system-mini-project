import express from 'express';
const router = express.Router();
//  GET /works - Get all Works
router.get('/', async (_req, res) => {
    // TODO: Update code to retrieve all Work objects with associated Volunteer
});
// GET /works/:id - Get work by ID
router.get('/:id', async (req, res) => {
    // TODO: Update code to retrieve work object with associated Volunteer based on passing ID of Work
});
// POST /works - Create new work
router.post('/', async (req, res) => {
    // TODO: Update code to create new Work based on passing name, status, description, and assignedVolunteerId
});
// PUT /works/:id - Update work by ID
router.put('/:id', async (req, res) => {
    // TODO: Update code to update already existing work by passing values of name, status, description, assignedVolunteerId.
});
// DELETE /works/:id - Delete work by ID
router.delete('/:id', async (req, res) => {
    // TODO: Update code to delete work based on passing ID of Work
});
export { router as workRouter };
