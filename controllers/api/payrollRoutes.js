const router = require('express').Router();
const { Payroll } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPayroll = await Payroll.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPayroll);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const payrollData = await Payroll.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!payrollData) {
      res.status(404).json({ message: 'No payroll found with this id!' });
      return;
    }

    res.status(200).json(payrollData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
