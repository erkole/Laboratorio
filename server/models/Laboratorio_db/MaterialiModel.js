import MaterialiModelGenerated from "./generated/MaterialiModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await MaterialiModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...MaterialiModelGenerated,
  ...customModel
};
