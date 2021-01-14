import React, {useState} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Row, Col } from 'reactstrap';
import Navigation from './Component/navbar'
import './App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


// TRAVAIL SUR UPLOAD PHOTO
import 'antd/dist/antd.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
    
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-xxx',
        percent: 50,
        name: 'image.png',
        status: 'uploading',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}


function ScreenSell (props) {

  console.log('token from sellscreen',props.token,'-----');

  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [brand,setBrand]=useState('')
  const [price,setPrice]=useState(0)
  const [age,setAge]=useState('')
    
  const [catName, setCatName] = useState('');
  const [selectedCatName, setSelectedCatName] = useState(false)
  const [DisplaySubCat, setDisplaySubCat] = useState([]);
  const [subCatName, setSubCatName] = useState('');
  const [selectedValueState, setSelectedValueState] = useState("");
  const [isValidated,setIsValidated]=useState(false)


  var handleClick = async () => {

    const dataArticle = await fetch(`/articles/create-article`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `title=${title}&description=${desc}&brand=${brand}&price=${price}&age=${age}&category=${catName}&subcategory=${subCatName}&state=${selectedValueState}&sellerToken=${props.token}`
    });
    const dataAnnonce = await dataArticle.json()
    
  }

  if(isValidated==true){
  return  <Redirect to ='/Ventes'/>
  }

  // CREATION DES CATEGORIES

  var subCat1 = [
    { subcategory: "Sièges Auto" },
    { subcategory: "Nacelles" },
    { subcategory: "Poussettes" },
    { subcategory: "Landeaux" },
    { subcategory: "Portes-Bébé" },
    { subcategory: "Sacs à Langer" },
    { subcategory: "Se déplacer / Autre" },
  ]

  var subCat2 = [
    { subcategory: "de 0 à 3 mois" },
    { subcategory: "de 4 à 6 mois" },
    { subcategory: "de 7 à 12 mois" },
    { subcategory: "de 13 à 18 mois" },
    { subcategory: "de 19 à 24 mois" },
    { subcategory: "de 2 à 3 ans" },
    { subcategory: "Autres" },
  ]

  var subCat3 = [
    { subcategory: "Baignoires" },
    { subcategory: "Transats de bain" },
    { subcategory: "Lingettes-Serviettes" },
    { subcategory: "Thermometres" },
    { subcategory: "Jouets de bain" },
    { subcategory: "Se baigner / Autre" },
  ]

  var subCat4 = [
    { subcategory: "Lits bébé" },
    { subcategory: "Lits de voyage" },
    { subcategory: "Linges de lit" },
    { subcategory: "Gigoteuses" },
    { subcategory: "Veilleuses" },
    { subcategory: "Babyphones" },
    { subcategory: "Dormir / Autre" },
  ]

  var subCat5 = [
    { subcategory: "Biberons" },
    { subcategory: "Chauffe-Biberons" },
    { subcategory: "Stérilisateurs" },
    { subcategory: "Robots de Cuisine" },
    { subcategory: "Vaiselles" },
    { subcategory: "Accessoires" },
    { subcategory: "Manger / Autre" },
  ]

  if (catName == "Se déplacer" && selectedCatName == true) {
    setDisplaySubCat(subCat1)
    setSelectedCatName(false)

  }
  else if (catName == "S'habiller" && selectedCatName == true) {
    setDisplaySubCat(subCat2)
    setSelectedCatName(false)
  }
  else if (catName == "Se baigner" && selectedCatName == true) {
    setDisplaySubCat(subCat3)
    setSelectedCatName(false)
  }
  else if (catName == "Dormir" && selectedCatName == true) {
    setDisplaySubCat(subCat4)
    setSelectedCatName(false)
  }
  else if (catName == "Manger" && selectedCatName == true) {
    setDisplaySubCat(subCat5)
    setSelectedCatName(false)
  }

  let InputSubCat='';
  let optionSubCat='';


  if(DisplaySubCat!=''){ 
    let optionSubCat= DisplaySubCat.map((e,i) => {
      return (
        <option>{e.subcategory}</option>
      )
    })
    InputSubCat = <Input type="select" name="select" onChange={(e) => setSubCatName(e.target.value)} className='inputSell'>
                    {optionSubCat}
                  </Input>
  }


  return (
    <div>

      <Navigation/>
      <Row>
        <Col xs="12" lg="4" xl={{ span: 6, offset: 3 }}>
          <h4 className='titleRow'>Crée ton annonce</h4>          
          <PicturesWall/>          
          <div id='sellScreen'>
            <p>{optionSubCat}</p>
            <InputGroup className='inputSell'>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Nom de l'article" 
              onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
            <InputGroup className='inputSell'>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Description" 
              onChange={(e) => setDesc(e.target.value)}
              />
            </InputGroup>
            <InputGroup className='inputSell'>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Marque" 
              onChange={(e) => setBrand(e.target.value)}
              />
            </InputGroup>
            <InputGroup className='inputSell'>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Prix" 
              onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
            <InputGroup className='inputSell'>
              <InputGroupAddon addonType="prepend">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Age" 
              onChange={(e) => setAge(e.target.value)}
              />
            </InputGroup>

            <Input style={{color: 'rgba(214, 162, 232,1.0)'}} type="select" name="select" onChange={(e) => {setCatName(e.target.value);setSelectedCatName(true)}} className='inputSell' >
                <option>-Choisir une catégorie</option>
                <option>Se déplacer</option>
                <option>S'habiller</option>
                <option>Dormir</option>
                <option>Manger</option>
                <option>Se baigner</option>
            </Input>
              {InputSubCat}
            <Input style={{color: 'rgba(214, 162, 232,1.0)'}} type="select" name="select" onChange={(e) => {setSelectedValueState(e.target.value);setSelectedCatName(true)}} className='inputSell' >
                <option>-Choisir un état</option>
                <option>Neuf</option>
                <option>Bon état</option>
                <option>Etat d'usage</option>
            </Input>
            
            <Button outline color="secondary" onClick={() => { handleClick();setIsValidated(true) }} >Mettre en vente</Button>

          </div>
        </Col>
      </Row>
      
    </div> 
  )
}


  function mapStateToProps(state) {
    return {token:state.token}
  }
  export default connect(
    mapStateToProps,
    null  
  )(ScreenSell);
