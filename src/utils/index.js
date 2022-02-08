const { format } = require("date-fns");

const formatDate = (date) => {
  return format(new Date(date), "dd-MM-yyyy");
};

module.exports = { formatDate };
