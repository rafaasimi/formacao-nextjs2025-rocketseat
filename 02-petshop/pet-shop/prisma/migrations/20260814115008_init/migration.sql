-- CreateTable
CREATE TABLE "appointments" (
    "id" SERIAL NOT NULL,
    "tutorName" TEXT NOT NULL,
    "petName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);
