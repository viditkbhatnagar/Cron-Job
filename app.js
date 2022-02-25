

const axios = require("axios");


module.exports = {
  //get all user
  addTicket: async (ticket) => {

    try {
      const resp = await axios.post(`https://devctdesk.azurewebsites.net/Ticket/USR3`,ticket);
      if (resp && resp.data) {
        return {
          status: "Success",
          data: resp.data,
        };
      }
    } catch (err) {
      return {
        status: "Failed",
        error: err,
      };
    }
  }
};