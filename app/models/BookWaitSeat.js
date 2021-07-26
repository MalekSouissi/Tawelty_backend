module.exports = (sequelize, Sequelize) => {
	const BookWaitSeat = sequelize.define('BookWaitSeat', {

    RestaurantId:{
        type: Sequelize.INTEGER,
    },
    ids:{
        type: Sequelize.STRING,
        primaryKey: true
    },

    id:{
        type: Sequelize.INTEGER,
        required: true 
    },
  
    guestName:{
        type: Sequelize.STRING,
      
    },
    cancResv:{
        type: Sequelize.STRING,
      
    },
    confResv:{
        type: Sequelize.STRING,
      
    },

    etat:{
        type: Sequelize.INTEGER,
    },
  
    debut:{
        type: Sequelize.DATE,
       
    },
    fin:{
        type: Sequelize.DATE,
  
    },

 
  
    createdAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
     
});

return BookWaitSeat;
}