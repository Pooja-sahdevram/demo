// const asynchandler = (func) => async(req,res,next)=>{
//     try{
//      await func(req,res,next)
//     }
//     catch(err){
//         res.status(err.code||500).json({sucess:false,
//             message:err.message
//         })
//     }
// }
const asynchandler = (reqhandler) => {
  (req, res, next) => {
    Promise.resolve(reqhandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asynchandler };
