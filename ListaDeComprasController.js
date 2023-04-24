({
    // Função para calcular o preço total
    calculatePrecoTotal: function(component, event, helper) {
      // Recupera o valor do campo de preço unitário
      var precoUnitario = component.find("precoUnitarioField").get("v.value");
      // Recupera o valor do campo de quantidade
      var quantidade = component.find("quantidadeField").get("v.value");
      // Calcula o preço total multiplicando o preço unitário pela quantidade
      var precoTotal = precoUnitario * quantidade;
      // Define o valor do campo de preço total com o valor calculado
      component.find("precoTotalField").set("v.value", precoTotal);
    },
    // Função para exibir uma mensagem de sucesso
    showToast: function(component, event, helper) {
      // Cria um evento de toast
      var toastEvent = $A.get("e.force:showToast");
      // Define os parâmetros da mensagem
      toastEvent.setParams({
        title: "Sucesso!",
        message: "Solicitação efetuada com sucesso.",
        type: "success"
      });
      // Exibe a mensagem de toast
      toastEvent.fire();
    }
  });