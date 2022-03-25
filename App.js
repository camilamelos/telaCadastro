import React, { useState } from "react";
<Image source={imgFundo} style={styles.imgFundoCadastro} />;
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles";
import imgFundo from "./assets/fundoHomeOfc.png";
import { FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons , Ionicons   } from '@expo/vector-icons';
import { HelperText } from "react-native-paper";

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nome_usuario: "",
      cpf: "",
      endereco: "",
      telefone: "",
      data_nascimento: "",
      celular: "",
      endereco: "",
      cidade: "",
      estado: "",
      email: "",
      numero: "",
      senha: "",
      confirma_senha: ""
    }
  });
  const onSubmit = data => console.log(data);
    //ver/ocultar a senha do password
    const [ocultarSenha, setOcultarSenha] = useState(true);

  const { width, height } = Dimensions.get("screen");

  return (
    <ScrollView style={{ flex: 1, height: height / 5 }}>
    <View style={styles.container}>
      <View style={{ width: "100%", height: height / 0.80 }}>
        <Image source={imgFundo} style={styles.imgFundoCadastro} />

        <View style={styles.cadastro}>
          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome name="user" size={17} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Nome Completo"} /></>}
              name="nome_usuario"
            />
            {errors.nome_usuario && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                maxLength: 14,
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><MaterialCommunityIcons name="numeric" size={18} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                  placeholder={"CPF"} /></>}
              name="cpf"
            />
            {errors.cpf && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome5 name="calendar-alt" size={16} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                  placeholder={"Data de Nascimento"} /></>}
              name="data_nascimento"
            />
            {errors.data_nascimento && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                maxLength: 20,
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome5 name="whatsapp" size={17} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                  placeholder={"(00) 90000-0000"} /></>}
              name="celular"
            />
            {errors.celular && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><Ionicons name="location-sharp" size={17} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Endereço"} /></>}
              name="endereco"
            />
            {errors.endereco && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><MaterialCommunityIcons name="numeric" size={18} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value}
                  placeholder={"Número"} /></>}
              name="numero"
            />
            {errors.numero && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome5 name="home" size={16} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Cidade"} /></>}
              name="cidade"
            />
            {errors.cidade && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome5 name="search-location" size={16} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Estado"} /></>}
              name="estado"
            />
            {errors.estado && <Text style={styles.text}>Campo obrigatório.</Text>}
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                maxLength: 250,
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><MaterialIcons  name="alternate-email" size={16} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Email"} /></>}
              name="email"
            />                
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                maxLength: 15, 
                minLength: 6,
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome name="lock" size={17} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={"Senha"} /></>}
              name="senha"
            />
            {errors.senha && <Text style={styles.text}>Campo obrigatório.</Text>}
            <TouchableOpacity
                  style={styles.icon}
                  onPress={() => setOcultarSenha(!ocultarSenha)}
                >
                  {ocultarSenha
                    ? <Ionicons name="eye" color="#0445ba" size={17} />
                    : <Ionicons name="eye-off" color="#0445ba" size={17} />}
                </TouchableOpacity>
          </View>

          <View style={styles.inputView}>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, onBlur, value } }) =>
              <><FontAwesome name="lock" size={17} color="#0445ba" />
              <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  textContentType="password"
                  secureTextEntry={ocultarSenha}
                  placeholder={"Confirme a Senha"} /></>}
              name="confirma_senha"
            />
            {errors.confirma_senha && <Text style={styles.text}>Campo obrigatório.</Text>}

            <TouchableOpacity
                  style={styles.icon}
                  onPress={() => setOcultarSenha(!ocultarSenha)}
                >
                  {ocultarSenha
                    ? <Ionicons name="eye" color="#0445ba" size={17} />
                    : <Ionicons name="eye-off" color="#0445ba" size={17} />}
                </TouchableOpacity>
          </View>


        </View>
        <TouchableOpacity
          style={styles.btnCadastrar}
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
        <View style ={{height: 20}}></View>
      </View>
    </View>
  </ScrollView>
  );
}
