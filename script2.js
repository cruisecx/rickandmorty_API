const addStyleSheet = () => {
    document.styleSheets[0].insertRule(`
        .container{
            width: 60%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `)
    document.styleSheets[0].insertRule(`
        .title{
            position: relative;
            bottom: -50px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .btn{
            margin-top: 100px;
            margin-bottom: 150px;
        }
    `)
    document.styleSheets[0].insertRule(`
        button{
            width: 450px;
            height: 50px;
            border-radius: 5px;
            background-color: rgb(60,179,113);
            color: aliceblue;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            cursor: pointer;
            font-weight: 700;
        }
    `)
    document.styleSheets[0].insertRule(`
        .btn{
            margin-top: 100px;
            margin-bottom: 150px;
        }
    `)
    document.styleSheets[0].insertRule(`
        button:hover{
            border: 1px solid gray;
        }
    `)
    document.styleSheets[0].insertRule(`
        .card{
            width: 95%;
            height: 42.5%;
            background-color: rgb(80,80,80);
            border-radius: 10px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    `)
    document.styleSheets[0].insertRule(`
        .img{
            width: 33%; 
            height: 100%;
            display: flex;
            justify-items: center;
            align-items: center;
            background-color: rgb(22, 22, 22);
            border: 1px solid black;
        }
    `)
    document.styleSheets[0].insertRule(`
        .content{
            width: 67%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            background-image: linear-gradient(to right, rgb(22, 22, 22),  rgb(80, 80, 80));
            padding: 5px 30px;
            border-radius: 0 5px 5px 0;
            border: 1px solid black;
        }
    `)
    document.styleSheets[0].insertRule(`
        .content span:first-child{
            opacity: 0.7;
            font-size: 22px;
            text-transform: uppercase;
        }
    `)
    document.styleSheets[0].insertRule(`
        .name{
            font-size: 32px;
            padding: 0 20px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: rgb(60,179,113);
        }
    `)
    document.styleSheets[0].insertRule(`
        .secline{
            display: flex;
            gap: 70px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .thiline{
            display: flex;
            gap: 70px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .thiline fieldset{
            height: 65px;
        }
    `)
    document.styleSheets[0].insertRule(`
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px 0 0 5px;
        }
    `)
    document.styleSheets[0].insertRule(`
        fieldset{
            border: 1px solid rgb(121, 190, 255);
            border-radius: 5px;
            text-align: left;
            padding: 0 40px 0 15px;
            height: 50px;
            background-color: rgb(28,28,28);
        }
    `)
    document.styleSheets[0].insertRule(`
        legend{
            font-size: small;
            opacity: 0.7;
        }
    `)
}

addStyleSheet()