import { throws } from "assert";
import { getRepository, Repository } from "typeorm";

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<void> {
    // Complete usando ORM
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query("SELECT * FROM user ORDER BY first_name ASC"); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(
      "SELECT id, LOWER(first_name), LOWER(last_name), email, games, created_at, updated_at FROM user WHERE first_name='first_name' AND last_name='last_name'"
    ); // Complete usando raw query
  }
}
