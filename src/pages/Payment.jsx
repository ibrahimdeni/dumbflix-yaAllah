import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (

    <div style={{height:"100vh", backgroundColor:"black"}}>
        <div className="d-flex justify-content-center">
        <Form className="mt-5 w-50" style={{backgroundColor:"black"}}>

            <h1 className="text-light text-center fw-bold mb-5">Premium</h1>

            <p className="text-light text-center">Bayar sekarang dan nikmati streaming film-film kekinian dari <spam className="fw-bold" style={{color:"red"}}>DUMBFLIX</spam></p>
            <p className="text-light text-center fw-bold"><spam className="fw-bold" style={{color:"red"}}>DUMBFLIX </spam>: 0981312323</p>

            <Form.Group className="mb-3 mt-5 w-50 mx-auto" controlId="formBasicEmail">
                <Form.Control className="bg-dark text-light" type="text" placeholder="Input your account number" />
            </Form.Group>

            <Form.Group className="mb-5 w-50 mx-auto" controlId="formBasicPassword">
                <Form.Control className="fw-bold input-payment" type="text" placeholder="Attache proof of transfer" />
            </Form.Group>

            <div className="w-100">
                <Button className="mb-3 w-50 mx-auto d-flex justify-content-center fw-semibold" style={{backgroundColor:"red"}} type="submit">
                    Kirim
                </Button>
            </div>
        </Form>
        </div>
    </div>
  );
}

export default BasicExample;