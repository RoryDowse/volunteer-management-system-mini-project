import express from 'express';
import type { Request, Response } from 'express';
import { Work, Volunteer } from '../../models/index.js';


 const router = express.Router();

//  GET /works - Get all Works
router.get('/', async (_req: Request, res: Response) => {
  // TODO: Update code to retrieve all Work objects with associated Volunteer
  try {
    const works = await Work.findAll({ include: [Volunteer]});
    res.status(200).json(works);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve works' });
  }
});

// GET /works/:id - Get work by ID
router.get('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to retrieve work object with associated Volunteer based on passing ID of Work
  try {
    const work = await Work.findByPk(req.params.id, { include: [Volunteer]});
    if (work) {
      res.status(200).json(work);
    } else {
      res.status(404).json({ error: 'Work not found' });
    }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve work' });
    }
});

// POST /works - Create new work
router.post('/', async (req: Request, res: Response) => {
  // TODO: Update code to create new Work based on passing name, status, description, and assignedVolunteerId
  const { name, status, description, assignedVolunteerId } = req.body;

  // Validate required fields
  if (!name || !status || !description) {
    return res.status(400).json({ error: 'Name, status, and description are required fields'})
  }

  try {
     // Create the new Work entry in the database
    const newWork = await Work.create({
      name,
      status,
      description,
      assignedVolunteerId,
    });

    // Respond with the created Work object
    res.status(201).json(newWork);
  } catch (error) {
    // Handle any error that occurs during creation
    console.error('Error creating work:', error);
    res.status(500).json({ error: 'Failed to create work' });
  }
  return;
});

// PUT /works/:id - Update work by ID
router.put('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to update already existing work by passing values of name, status, description, assignedVolunteerId.
  // Extract values
  const { name, status, description, assignedVolunteerId } = req.body;

  // Validate required fields
  if (!name || !status || !description) {
    return res.status(400).json({ error: 'Name, status, and description are required fields'})
  }

  try {
    // Find the Work entry by its ID
    const work = await Work.findByPk(req.params.id);
    if (!work) {
      return res.status(404).json({ error: 'Work not found' });
    }

    // Update the Work entry with the new values
    await work.update({
      name,
      status,
      description,
      assignedVolunteerId,
    });

    // Respond with the updated Work object
    res.status(200).json(work);
  } catch (error) {
    // Handle any error that occurs during the update
    console.error('Error updating work:', error);
    res.status(500).json({ error: 'Failed to update work' });
  }
  return;
});

// DELETE /works/:id - Delete work by ID
router.delete('/:id', async (req: Request, res: Response) => {
  // TODO: Update code to delete work based on passing ID of Work
  try {
    const work = await Work.findByPk(req.params.id);
    if (work) {
      await work.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Work not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete work' });
  }
});

export { router as workRouter };
