import InterventiTModelGenerated from "./generated/InterventiTModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await InterventiTModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...InterventiTModelGenerated,
  ...customModel
};
