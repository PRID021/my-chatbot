import { pgTable, uuid, varchar, foreignKey, timestamp, json } from "drizzle-orm/pg-core"


export const user = pgTable("User", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	email: varchar({ length: 64 }).notNull(),
	password: varchar({ length: 64 }),
});

export const chat = pgTable("Chat", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp({ mode: 'string' }).notNull(),
	messages: json().notNull(),
	userId: uuid().notNull(),
},
	(table) => {
		return {
			chatUserIdUserIdFk: foreignKey({
				columns: [table.userId],
				foreignColumns: [user.id],
				name: "Chat_userId_User_id_fk"
			}),
		}
	});