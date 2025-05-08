
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "Como criar um novo projeto?",
      answer: "Para criar um novo projeto, clique no botão 'Novo Projeto' na página inicial ou navegue até a seção 'Meus Projetos' e utilize o botão de adição. Siga o assistente de criação, definindo o nome, descrição e selecionando os agentes para seu time."
    },
    {
      question: "Como funciona o sistema de tokens?",
      answer: "Os tokens são a unidade de processamento da plataforma Olympus. Cada interação com os agentes consome uma quantidade de tokens baseada na complexidade da tarefa. Seu plano inclui uma cota mensal de tokens, que pode ser visualizada no dashboard principal e na página de Analytics."
    },
    {
      question: "Como ajustar as configurações de um agente?",
      answer: "As configurações de cada agente podem ser ajustadas dentro de um projeto específico. Navegue até o projeto desejado, selecione a aba 'Time' e clique no agente que deseja configurar. Você poderá ajustar parâmetros como temperatura, tokens máximos e comportamento."
    },
    {
      question: "Como exportar os artefatos gerados?",
      answer: "Os artefatos gerados durante o projeto podem ser exportados individualmente ou em conjunto. Na página de 'Artefatos' do projeto, selecione os itens desejados e clique no botão 'Exportar'. Você poderá escolher o formato de exportação (PDF, ZIP, etc)."
    },
    {
      question: "Como compartilhar um projeto com outros usuários?",
      answer: "Para compartilhar um projeto, navegue até a página do projeto, clique no botão 'Compartilhar' no canto superior direito. Você poderá adicionar colaboradores por e-mail e definir suas permissões (visualização, edição, administração)."
    },
    {
      question: "O que fazer se um agente não responde corretamente?",
      answer: "Se um agente não estiver respondendo conforme esperado, você pode tentar refinar seu prompt, ajustar as configurações do agente ou trocar para outro agente mais adequado para a tarefa. Também é possível utilizar a funcionalidade de feedback para melhorar o desempenho em interações futuras."
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="font-playfair text-2xl font-semibold mb-6">Ajuda & Suporte</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-olympus-card-bg border-slate-800">
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-olympus-card-bg border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg">Precisa de ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full flex items-center gap-2 bg-olympus-accent text-black hover:bg-olympus-accent/90">
                  <MessageSquare className="h-4 w-4" /> Chat com Suporte
                </Button>
                <Button variant="outline" className="w-full flex items-center gap-2 border-olympus-accent text-olympus-accent hover:bg-olympus-accent/10">
                  <Mail className="h-4 w-4" /> Enviar Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-olympus-card-bg border-slate-800">
              <CardHeader>
                <CardTitle className="text-lg">Recursos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-olympus-accent hover:underline block py-1">
                      Documentação
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-olympus-accent hover:underline block py-1">
                      Guias de Início Rápido
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-olympus-accent hover:underline block py-1">
                      Blog Técnico
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-olympus-accent hover:underline block py-1">
                      Relatório de Bugs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-olympus-accent hover:underline block py-1">
                      Status da Plataforma
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
