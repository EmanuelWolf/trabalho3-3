const  expresso  =  requer ( 'expresso' )
const  { resposta }  =  requer ( 'expresso' )
const  { uuid }  =  require ( 'uuidv4' ) // id unico


 aplicativo  const =  expresso ( )
app . use ( express . json ( ) )
const  computadores  =  [ ]
const  periféricos  =  [ ]
 cadernos  const =  [ ]



//--------------------------------------Computadores-------- -------------------------------------//

app . get ( '/computadores' ,  ( pedido ,  resposta )  =>  {
     resposta de retorno . json ( computadores )
} ) //Visualizar
app . post ( '/computadores' ,  ( pedido ,  resposta )  =>  {
    const  { hardwarer , software , preço }  =  request . corpo
    const  especificacao  =  {  id : uuid ( ) , hardwarer , software , preço }
    computadores . push ( especificação )
     resposta de retorno . estado ( 201 ) . json ( especificação )

} ) //inserir
//coloque atualiza
app . put ( '/computadores/:id' ,  ( pedido ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  { hardwarer , software , preço }  =  request . corpo
    const  novosComputadores  =  { id , hardwarer , software , preço }
    const  especificacaoindex  =  computadores . findIndex ( especificacao  =>  especificacao . id  ==  id )
    computadores [ especificacaoindex ]  =  novoComputadores ;
     resposta de retorno . json ( novos Computadores )
} )
//delete apaga
app . delete ( '/computadores/:id' ,  ( pedido ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  especificacaoindex  =  computadores . findIndex ( especificacao  =>  especificacao . id  ==  id )
    computadores . splice ( especificacaoindex ,  1 )
     resposta de retorno . estado ( 204 ) . enviar ( )
} )


app . escute ( 8181 ,  ( )  =>  {
    console . log ( 'O Servidor foi iniciado!' )
} )


///-----------------Periféricos---------------------------- -------//

app . get ( '/perifericos' ,  ( requisição ,  resposta )  =>  {
     resposta de retorno . json ( periféricos )
} ) //Visualizar
app . post ( '/perifericos' ,  ( pedido ,  resposta )  =>  {
    const  { Monitor , Teclado , mouse }  =  request . corpo
    const  especificacao  =  {  id : uuid ( ) , Monitor , Teclado , mouse }
    periféricos . push ( especificação )
     resposta de retorno . estado ( 201 ) . json ( especificação )

} ) //inserir
//coloque atualiza
app . put ( '/perifericos/:id' ,  ( pedido ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  { Monitor , Teclado , mouse }  =  request . corpo
    const  newPerifericos  =  { id , Monitor , Teclado , mouse }
    const  especificacaoindex  =  perifericos . findIndex ( especificacao  =>  especificacao . id  ==  id )
    periféricos [ especificacaoindex ]  =  novoPeriféricos ;
     resposta de retorno . json ( newPeriféricos )
} )
//delete apaga
app . delete ( '/perifericos/:id' ,  ( pedido ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  especificacaoindex  =  perifericos . findIndex ( especificacao  =>  especificacao . id  ==  id )
    periféricos . splice ( especificacaoindex ,  1 )
     resposta de retorno . estado ( 204 ) . enviar ( )
} )

//------------------------------------------------ ----Cadernos--------------------//

app . get ( '/notebooks' ,  ( solicitação ,  resposta )  =>  {
     resposta de retorno . json ( notebooks )
} ) //Visualizar
app . post ( '/notebooks' ,  ( pedido ,  resposta )  =>  {
    const  { modelo , memoria , ssd }  =  request . corpo
    const  especificacao  =  {  id : uuid ( ) , modelo , memoria , ssd }
    cadernos . push ( especificação )
     resposta de retorno . estado ( 201 ) . json ( especificação )

} ) //inserir
//coloque atualiza
app . put ( '/notebooks/:id' ,  ( pedido ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  { modelo , memoria , ssd }  =  request . corpo
    const  newNotebooks  =  { id , modelo , memoria , ssd }
    const  especificacaoindex  =  notebooks . findIndex ( especificacao  =>  especificacao . id  ==  id )
    notebooks [ especificacaoindex ]  =  novoCadernos ;
     resposta de retorno . json ( novoCadernos )
} )
//delete apaga
app . delete ( '/notebooks/:id' ,  ( solicitação ,  resposta )  =>  {
    const  { id }  =  solicitação . parâmetros
    const  especificacaoindex  =  notebooks . findIndex ( especificacao  =>  especificacao . id  ==  id )
    cadernos . splice ( especificacaoindex ,  1 )
     resposta de retorno . estado ( 204 ) . enviar ( )
} )