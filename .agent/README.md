---
description:
---

# Agent Configuration

This directory contains configuration, workflows, and skills for the AI agent.

- `workflows/`: Contains workflow definitions (.md files).
- `skills/`: Contains skill definitions and resources.
- `rules/`: Custom rules for the agent.

## Repository Testing Convention

- Unit tests run through the **Jest command**: `pnpm run test`.
- In this environment, Jest is provided via a local shim that runs Node's test runner.
