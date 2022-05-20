import {FormContainer} from "./Styled";
import React,{useState} from 'react'
import Flip from 'react-reveal/Flip';
import {AvForm,AvField} from 'availity-reactstrap-validation'
import axios from "axios";
function Form() {
   const [state,setState] = useState(true);
   const [value,setValue] = useState('');
   const [value2,setValue2] = useState('');
   const [value3,setValue3] = useState('');
   const [value4,setValue4] = useState('');
    function Submits(event,values) {
        const messageText =
            `<b>Name:</b> ${values.Name}\n` +
            `<b>First Name:</b> ${values.FirstName}\n` +
            `<b>Phone:</b> +998${values.phone}\n` +
            `<b>Message:</b>${values.description}`;
        const token = "2003018969:AAGJ_lSfoU37SqyJBwOwVGwhD88wVCG_10k";
        const api = `https://api.telegram.org/bot${token}/sendMessage`
        axios.post(api, {chat_id: "-790428013", text: messageText, parse_mode: "html"})
            .then(() => {
              alert.success('malumot ketdi');
            })
            .catch((e) => {
                alert.error('Serverda xatolik ');
            })
        setValue('');
        setValue2('');
        setValue3('');
        setValue4('');
   }

    function OnchangeForm(e) {
       if(e){
          setState(false)
       }
       else {
           setState(true)
       }
    }
    return(
        <FormContainer id={'form'}>
            <Flip left>
                <div className="form-block">
                    <h1>XABAR JO'NATISH</h1>
                    <AvForm id={'form-1'} onValidSubmit={Submits} onChange={(e)=>OnchangeForm(e.target.value)} className={'AvForm-block'}>
                        <AvField className={'avForm'} onChange={(e)=>setValue(e.target.value)} value={value} type={'text'} name={'Name'} placeholder={'Ism'} required/>
                        <AvField className={'avForm'} onChange={(e)=>setValue2(e.target.value)} value={value2} type={'text'} name={'FirstName'} placeholder={'Familiya'} required/>
                        <AvField className={'avForm'} onChange={(e)=>setValue3(e.target.value)} value={value3} type={'number'} name={'phone'} placeholder={'9X-XXX-XX-XX'} required/>
                        <AvField className={'avForm-des'} onChange={(e)=>setValue4(e.target.value)} value={value4} type={'textarea'} name={'description'} placeholder={'Xabar'} required/>
                    </AvForm>
                    <button disabled={state} form={'form-1'} className={'submit'}> JO'NATISH
                        <i className="bi bi-arrow-right"> </i> </button>
                </div>
            </Flip>
        </FormContainer>
    )
}
export default Form