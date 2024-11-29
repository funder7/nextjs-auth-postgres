-- CreateTable
CREATE TABLE user
(
    id       TEXT NOT NULL,
    name     TEXT,
    email    TEXT,
    password TEXT NOT NULL,

    CONSTRAINT user_pkey PRIMARY KEY (id)
);

-- CreateIndex
CREATE UNIQUE INDEX user_email_unique ON user (email);

