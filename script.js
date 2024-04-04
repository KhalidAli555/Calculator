function cal(){
    const opr1=document.getElementById("first").value;
    const opr2=document.getElementById("second").value;
    const ope=document.getElementById("operator").value;
    if(ope=="+"){
        var result= parseInt(opr1)+parseInt(opr2);
    }
    if(ope=="-"){
        var result= parseInt(opr1)-parseInt(opr2);
    }
    if(ope=="*"){
        var result= parseInt(opr1)*parseInt(opr2);
    }
    if(ope=="/"){
        var result= parseInt(opr1)/parseInt(opr2);
    }
    document.getElementById("result").value=result;

}