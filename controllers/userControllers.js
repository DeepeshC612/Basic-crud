const curdSchema = require('../model/curdSchema')


const getUser = async (req, res) => {
    try {
      console.log("Get Request");
      const crudget = await curdSchema.find();
      res.json(crudget);
    } catch (err) {
      res.send("Error" + err);
    }
  }
  
  
  const createUser = async (req, res) => {
    console.log(req.body);
  
    const curddata = new curdSchema({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
    });
  
    try {
      const addRes = await curddata.save();
      res.json({
        status: "Succesfull",
        data: addRes,
      });
    } catch (err) {
      res.send({
        status: "Failure",
        data: "Error Occure" + err.message,
      });
    }
  };


  const updateUser = async (req, res) => {
    console.log(req.params.id);
    try {
      const cruddel = await curdSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.json(cruddel);
    } catch (err) {
      res.send("Error" + err);
    }
  };


  const deleteUser = async (req, res) => {
    await curdSchema.findByIdAndDelete(req.params.id);
    try {
      res.status(204).json({
        status: "Success",
        data: {},
      });
    } catch (err) {
      res.status(500).json({
        status: "Faild",
        message: err,
      });
    }
  };

  module.exports ={
    getUser,
    createUser,
    updateUser,
    deleteUser
  };