function isString(s){
  return typeof(s) === "string";
}

describe("A suite of string util", function(){
  it("is string", function(){
   expect(isString("ss")).toBeTruthy();
   expect(isString(1)).toBeTruthy();
  });
});
