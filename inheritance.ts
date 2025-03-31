//Uso: Relación "es-un": User es una entidad auditada (AuditableEntity), no solo la utiliza.
abstract class AuditableEntity {
  protected readonly id: string;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor() {
    this.id = uuidv4(); // UUID generation
    this.createdAt = new Date();
    this.updatedAt = this.createdAt;
  }

  protected trackUpdate(): void {
    this.updatedAt = new Date();
  }

  public getMetadata(): { id: string; createdAt: Date; updatedAt: Date } {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

// Subclase Especializada (Dominio específico)
class User extends AuditableEntity {
  private email: string;
  private status: "active" | "inactive";

  constructor(email: string) {
    super(); // Llama al constructor de AuditableEntity
    this.email = email;
    this.status = "active";
  }

  public deactivate(): void {
    this.status = "inactive";
    super.trackUpdate(); // Reutiliza lógica de auditoría
  }

  public updateEmail(newEmail: string): void {
    if (this.status === "active") {
      this.email = newEmail;
      super.trackUpdate(); // Actualiza updatedAt automáticamente
    }
  }
}
