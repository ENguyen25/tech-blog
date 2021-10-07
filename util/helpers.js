const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const d = new Date();

module.exports = {
    format_date: (date) => {
        return `${monthNames[d.getMonth()]} ${new Date(date).getDate()}, ${
          new Date(date).getFullYear()}`;
      },
  };
