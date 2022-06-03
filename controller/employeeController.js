const Emp = require('../model/emp')

const mongoose = require("mongoose")

function create(req, res){
    let employeeName = req.body.empName
    let employeeEmail = req.body.empEmail
    let employeeMobile = req.body.empMobile
}