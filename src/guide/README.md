---
title: Introduction
---

# Introduction

Knowledge graphs are one of the most important technologies of the 2020s. Gartner predicted that the applications of graph processing and graph databases will grow at 100% annually over the next few years. Over the last two decades, this technology was adopted mostly by engineers and ontologists, hence the majority of knowledge graph tools were designed for the users with advanced programming skills.

In general, Knowledge graphs, need data to be imported and harmonised from multiple sources. Then algorithms, rules and reasoning are used to identify patterns of interest. In addition, visualisation tools are required to visually sort through all of the data, and sub-queries may result in standard charts (e.g. time-series, pie chart, bar chart etc.).

Finally, various analytical methods are required to further extract insights. All of this requires the development of considerable custom code, or very powerful no-code user interfaces. TypeDB is considerably differentiated from all other knowledge graphs, and has the potential to be a game changer, but it is relatively new and has limited capabilities in its no-code interface (TypeDB WorkBase). The Typerefinery is designed as a superior replacement to the Grakn/TypeDB WorkBase.

## What is TypeDB and TypeQL?

TypeDB is a database system that uses type systems to break down complex problems into meaningful and logical systems. TypeQL is a query language used to interact with TypeDB and provides powerful abstractions over low-level and complex data patterns.

## How does TypeDB and TypeQL work?

The backbone of TypeDB is the representation of your domain in a schema, which is made up of a set of types and rules. Types are structured and include entity types, relation types, and attribute types. Relation types connect types, and each type must play a particular role, which is captured using a role type that provides context to your connections. Rules in the schema are deductive logic that generates insights and new facts when applied to your data.

## What are the building blocks of TypeDB?

A database in TypeDB is made up of schema and data. Types in the schema are built using subtyping, and the database comes with some types built-in, such as entity, relation, and attribute, which are extended to create the schema. All data elements loaded into the database are instances of types, and each data element will also be an indirect instance of entity, relation, or attribute. Entities are the main distinguishable objects in your domain, relations connect data throughout the domain, and attributes carry an actual value. Types in TypeQL and TypeDB are first-class citizens, and entities, relations, and attributes can own attributes, making for a flexible modeling language for building structure in your database.

