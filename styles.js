import React from 'react';
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({    

    container: {
        backgroundColor: "#f5f5f5",
        flex: 1,
        display: "flex",
      },
      imgFundoCadastro: {
        width: "100%",
        height: height / 2.5,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
      },
    
      cadastro: {
        width: "90%",
        height: height / 1.18,
        paddingBottom: 25,
        backgroundColor: "white",
        marginLeft: 20,
        borderRadius: 10,
        position: "absolute",
        marginTop: height / 3.2,
        elevation: 15,
      },
    
      btnCadastrar:{
        width: 125,
        height: 35, 
        backgroundColor: '#04459b', 
        padding: 6, 
        marginTop: height / 1.28,
        display: "flex",
        borderRadius: 15,
        marginLeft: height / 6,
        
      },
    
      text: {
        fontSize: 14,
        color: "#0459ab",
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        marginTop: 10,
      },
    
      inputView: {
        width: '90%',
        height: 44,
        backgroundColor: '#F1F3F6',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginLeft: 17,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
        
      },
    
      input:{
        width: '85%',
        height: 44,
        padding: 8,
        fontSize: 14,
        flex: 1,
        paddingHorizontal: 12
      },
    
      icon: {
        width: '20%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      picker:{
          width: '30%',
          height: 44,
          padding: 8,
          fontSize: 10,
          flex: 1,
          paddingHorizontal: 12
    
      },
    
    });
