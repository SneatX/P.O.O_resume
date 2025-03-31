type User = {
  id: string;
  name: string;
  email: string;
};

interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | null>;
}

// Adaptador Concreto (PostgreSQL)
class PostgreSQLUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    // Lógica de persistencia en PostgreSQL
  }

  async findById(id: string): Promise<User | null> {
    // Lógica de recuperación de usuarios en PostgreSQL
  }
}
