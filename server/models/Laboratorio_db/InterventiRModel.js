import InterventiRModelGenerated from "./generated/InterventiRModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await InterventiRModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...InterventiRModelGenerated,
  ...customModel
};
