# TypeRefinery Architecture

We focus on integration and leting best opf breed tools do what they do best. We provide integration logic and where needed oppinionated implementation to ensure that the tools work together. We derive our oppinionated implementation from our experience in building knowledge graphs and knowledge experiences. Our team has number of experts in related fields and we seek to leverage their knowledge and develop experience that they would use and can be used by others as a startin gpoint.

Following is the overview of layers of architecture for Typerefinery platfrom:

<img width="800px" src="/architecture/Typerefinery-Architecture-Summary.png" />

Theses layers are described in more detail in the following sections.

## Integration Layer

The integration layer defines external integration interfaces of Typerefinery platfrom. It defines the interfaces that are used to integrate external tools and services into Typerefinery platfrom. It also defines the interfaces that are used to integrate Typerefinery platfrom into external tools and services. The integration layer is implemented as a set of REST APIs and is not limited to a specific technology stack.

## Service Layer

The service layer defines the services that are used to implement the functionality of Typerefinery platfrom. The service layer is implemented as a set of REST APIs and is not limited to a specific technology stack. We pick the best technology stack for each service. We focus on using open source technologies and tools to ensure openness and flexibility of the platfrom.

## Capabilities Layer

The capabilities layer groups the services into pillas on which Experience Layer is founded on. Each of the capabilities is implemented as part of underlying services and offer specific functionality which is manifested in the Experience Layer.

## Experience Layer

The experience layer is the user facing layer of Typerefinery platfrom. It is implemented as a set of web applications and is not limited to a specific technology stack. We pick the best technology stack for each application. We focus on using open source technologies and tools to ensure openness and flexibility of the platfrom.

Our aim is to create a flexible experience platfrom that can help you to create and taylor experiences for your needs.

We welcome feedback and will be happy to hear from you.