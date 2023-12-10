const response = (statuscode, data, message, res) => {
    res.status(statuscode).json( {
    payload: {
    status_code: statuscode,
    datas: data,
    message: message,
    },
    
    pagination: {
    prev: "",
    next: "",
    max:""
    }
  })
}

module.exports = response