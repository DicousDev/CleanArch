## Arquitetura Limpa

Essa arquitetura foi concebida com base em uma abordagem em camadas, cujo objetivo principal é simplificar as complexidades associadas aos componentes de interface. Essa simplificação tem como foco central tornar o processo de desenvolvimento de sites e aplicativos mais fluído e acessível.

A estrutura em camadas oferece uma organização lógica e modular, permitindo que as diferentes partes da aplicação trabalhem de forma coesa e isolada. Ao minimizar as intricadas interações entre os elementos da interface, essa arquitetura proporciona um ambiente mais propício para a criação e manutenção de projetos.

A simplificação dos componentes de tela não apenas facilita o desenvolvimento, mas também fomenta a reusabilidade, uma vez que elementos individuais podem ser adaptados e reaproveitados em várias partes da aplicação. Isso reduz a redundância de código e contribui para um código mais limpo e eficiente.

Ao adotar essa arquitetura em camadas, o processo de desenvolvimento torna-se mais gerenciável, permitindo que desenvolvedores concentrem-se na criação de funcionalidades e experiências de usuário de alta qualidade, sem serem sobrecarregados pelas complexidades técnicas inerentes à interface.

<img src="./images/arch.png" alt="imagem demonstrando o desenho da arquitetura" />

## Vantagens

- Simplicidade do desenvolvimento

- Organização lógica

- Fácil desenvolver testes automatizados

- Concentração das validações de negócio em um local independente do render escolhido

## Desvantagens

- Aprendizado e Curva de Adoção

- Aclopamento forte com tipo de local storage escolhido (SQLite, Firebase, entre outros)

- Aclopamento forte com protocolos (HTTP, AMQP, entre outros)