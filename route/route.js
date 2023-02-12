const express = require('express')
const router =express.Router()

router.get('/givetask/:task', async function(req,res){
    let  task=req.params.task
    function rev(task){
        task=task.split("").reverse().join("")
        return task
    }
})

module.exports = router