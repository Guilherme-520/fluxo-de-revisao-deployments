export interface ProcessStep {
  id: string;
  title: string;
  description?: string;
  descricaoDetalhada?: string; // ✅ deixa como opcional
}


export interface SwimlaneData {
  title: string;
  type: "csm" | "deploy" | "manager";
  steps: ProcessStep[];
}

export const swimlaneData: SwimlaneData[] = [
  {
    title: "CSM",
    type: "csm",
    steps: [
      {
        id: "csm-1",
        title: "Criação do BETO",
        description: "Definir o escopo do BETO",
        descricaoDetalhada:
          `- Criar o BETO seguindo o padrão utilizado nos exemplos;
- Ajustar o nome do deploy conforme o padrão utilizado na nomenclatura;
- Criar o "Order", o "Asset" e adicionar ao menos um "Client Sponsor" em "Deployment Contacts";
- Verificar se o valor do deploy está correto;
- Adicionar "Next steps" ao final do BETO (essa informação é necessária até a conclusão para "Closed - Value Confirmed").Definir o escopo do BETO. 

Siga as instruções deste manual: https://ibm.ent.box.com/s/o3fqv33ucetmzanen0n7urlhcpmmvva8",

Pagina para ajudar a criar o BETO: https://guilow.github.io/beto.github.io/`
      },
      {
        id: "csm-2",
        title: "Envio do deploy para marcar FLM Judgment",
        description: "Registrar FLM Judgment",
        descricaoDetalhada:
          "Preencher o formulário com o link do deploy para que seja marcado o FLM Judgment e entre em call (lista de deploy por quartil) \n Link: https://forms.monday.com/forms/b79c682af02ee2c0e563e0122a430568?r=use1",
      },
       {
        id: "csm-3",
        title: "Envio do deploy no formulário do Monday",
        description: "Registrar o deploy no Monday",
        descricaoDetalhada:
          "Preencher o formulário com o link do deploy para que seja revisado pela turma do deploy. \n Link: https://forms.monday.com/forms/60db303e2caf3f8e4829bb3211709f25?r=use1",
      },
      {
        id: "csm-4",
        title: "Manter comunicação de revisão dentro do Monday",
        description: "Centralizar revisões no Monday",
        descricaoDetalhada:
          "Acompanhar a revisão do deploy dentro do Monday. Caso seja necessário se comunicar com a turma do deploy ou gerentes, escrever nos comentários do post do deploy. \n link: https://ibm.monday.com/boards/9433974171 ",
      },
      {
        id: "csm-5",
        title: "Ajustes no BETO",
        description: "Correções necessárias no processo",
        descricaoDetalhada:
          "Ajustar as informações do BETO, caso necessário.",
      },
      
    ],
  },
  {
    title: "Gerente",
    type: "manager",
    steps: [
      {
        id: "manager-1",
        title: "Monday - Formulário CALL",
        description: "FLM Judgment",
        descricaoDetalhada:
          "O gerente assinala o FLM Judgment e o deploy aparecerá no Dashboard. Este número é importante porque define a quantidade de deploys e de renda que o CSM e a gerência se comprometerão no quartil.",
      },
      
      {
        id: "manager-2",
        title: "Revisão Gerente",
        description: "Validação final do gerente",
        descricaoDetalhada:
          "O gerente revisará o deploy. Caso precise de ajuste, retornará ao CSM, caso contrário, será fechado",
      },
      {
        id: "manager-3",
        title: "Finalização\ do BETO",
        description: "Encerrar processo BETO",
        descricaoDetalhada:
          "O gerente fecha o deploy para Closed - Value Confirmed.",
      },
    ],
  },
  {
    title: "Turma do Deploy",
    type: "deploy",
    steps: [
      {
        id: "deploy-1",
        title: "Revisão da Turma do Deploy",
        description: "Analisar pontos técnicos do deploy",
        descricaoDetalhada:
          "A turma do deploy revisará o deploy. Caso precise de ajuste, retornará ao CSM, caso contrário, será revisado pelo gerente.",
      },
    ],
  },
];
