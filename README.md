# TAIA Arena

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Make

### Installation

#### Using Docker Compose

Ensure Docker and Docker Compose are installed on your machine.

To launch the entire project (both portal and Amazon Clone), run:
   ```bash
   make all
   ```

To rebuild and launch the entire project, run:
   ```bash
   make re
   ```

To launch only the Amazon Clone application, run:
   ```bash
   make amazon-clone
   ```

To launch only the portal application, run:
   ```bash
   make portal
   ```

To stop all running containers, run:
   ```bash
   make down
   ```

To view logs for all services, run:
   ```bash
   make logs
   ```

To view logs specifically for the Amazon Clone service, run:
   ```bash
   make logs-amazon-clone
   ```

To view logs specifically for the portal service, run:
   ```bash
   make logs-portal
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 