# lti-ansraccess

A Node.js application for LTI 1.3 authentication and integration, designed for educational platforms such as D2L Brightspace.

## Features

- LTI 1.3 compliant authentication
- Integration with D2L Brightspace and other LMS platforms
- Built using [ltijs](https://cvmcosta.me/ltijs/)

## Getting Started

### Prerequisites

- Node.js >= 21.0.0
- [pnpm](https://pnpm.io/) package manager

### Installation

```sh
pnpm install
```

### Running the Application

- Development mode (with file watching and .env support):
  ```sh
  pnpm dev
  ```
- Production mode:
  ```sh
  pnpm start
  ```

### Environment Variables

Create a `.env` file in the project root to configure your environment variables as needed by your application and ltijs.

```
PORT=8080

LTI_KEY=hex key
MONGODB_URI=mongo uri or local db
PLATFORM_URL=https://org.brightspaceDomain.com
CLIENT_ID=hex client id from tool registration
AUTH_URL=https://org.brightspaceDomain.com/d2l/lti/authenticate
TOKEN_URL=https://auth.brightspace.com/core/connect/token
KEYSET_URL=https://org.brightspaceDomain.com/d2l/.well-known/jwks
```

## Author

Kiran Mahajan
