import ClientiModelGenerated from "./generated/ClientiModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ClientiModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClientiModelGenerated,
  ...customModel
};
