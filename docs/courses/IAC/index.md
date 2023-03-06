---
title: IaC
tags: IaC
---

# Infrastructure as Code

## Introduction

We're going attempt to cover Infrastructure as Code, covering core concepts, provisioning and testing of cloud infrastructure.<br/>
We'll split this by popular tools and those I've used historically.

There will be an attempt to add to and improve this over time, and documents will be supplemented with code as well.


## What is it?

I assumed everyone has moved to the cloud years ago, but there are still many companies new to, or migrating from On-Prem to the cloud.

So if you're looking at cloud resources, and clicking deploy on the Azure or AWS portal, to you I'd say stop!

Its never too early or too late to start with IaC (Infrastructure as Code), why?

Just like an architect would draw up blueprints for buildings or cities, code can be used to define the resources and configurations that make up your infrastructure.

It makes it easier to deploy and manage complex systems, changes are made programmatically and following good practice you end up with consistent, repeatable and traceable releases.

So who or what builds the plans, thats where tools like Pulumi or Terraform come into the scene.

![sup](../assets/iac/sup.gif)


## Concepts

### Declarative vs. Imperative

Declarative describes the desired end state of the infrastructure, by defining the resources and their configurations, while imperative describes the steps/commands required to reach that state.

With the declarative approach, we let the tools do a lot of the work, they compare desired state to actual (or last known state) in order to identify the actions it needs to carry out to create your grand vision. 

With the imperative approach, we'd need to actually define the commands in order to create our desired state, whether it be set of CLI commands or api calls.

### Drift

**And no, not that, we aren't in a field that interesting!**


![drift](../assets/iac/drift.gif)

Infrastructure drift occurs when the actual state of infrastructure differs from its intended state defined in IaC.<br/>Drift can be caused by manual intervention or changes made outside of the IaC process, which either has or will lead to inconsistencies and errors.

### State

We referred to state several times, and its used to describe the resources and its configurations.
Well IaC tools commonly store and refer to a state file, it represents the current (or last applied) state of infrastructure as deployed and configured by the chosen tool.<br/>
The state file is used to track changes, detect drift, and manage infrastructure updates.

### Idempotency

An idempotent system is one that can be run multiple times with the same result.<br/>
IaC tools all aim to be idempotent, so ran multiple times without causing unintended changes to infrastructure.

And no I can't say the word either....

### Testing

I'm not going to explain testing, but a note IaC can be tested like any other code, so include unit tests, integration tests, security scans etc.<br/>

### Cloud Providers

IaC can be used to manage infrastructure in various cloud providers such as AWS, Azure, and Google Cloud. This allows for multi-cloud environments to be managed consistently and efficiently.


## Closing

I think thats all for an introduction grab a coffee and we'll run through some good practices next 😁
