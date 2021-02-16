import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddProductIdToSkus1613493527567
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'skus',
      new TableColumn({
        name: 'product_id',
        type: 'varchar',
        generationStrategy: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'skus',
      new TableForeignKey({
        name: 'SkuProduct',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('skus', 'SkuProduct');
    await queryRunner.dropColumn('skus', 'product_id');
  }
}
