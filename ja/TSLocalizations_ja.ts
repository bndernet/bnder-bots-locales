import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ja {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `タスク **${id}** ${taskTitle} の期限は ${deadline} です。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `あなたはタスク **${id}** ${taskText} に割り当てられました。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。`;
            },
            assigned_embed_title(id: string): string {
                return `タスク ${id} が割り当てられました`;
            },
            assigned_embed_footer: "この通知は \"/preferences direct_messages\" コマンドで無効にできます。",
            assigned_embed_button_in_progress: "進行中としてマーク",
            assigned_embed_button_done: "完了としてマーク",
            deadline_was_in_past(id: string, guildName: string, guildId: string, taskTitle: string): string {
                return `タスク **${id}** ${taskTitle} の期限は過ぎています。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `あなたが割り当てられているタスク **${id}** ${taskTitle} は繰り返しとなり、再度実行する必要があります。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。`;
            },
            repeat_notification_embed_title(id: string): string {
                return `タスク ${id} が繰り返されました`;
            },
            deadline_alert: "タスクの期限",
            commented_embed_title(id: string): string {
                return `タスク ${id} にコメントが追加されました`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `[${guildName}](https://discord.com/channels/${guildId}) サーバーで ${author} によってタスクにコメントが追加されました: ${commentText}`;
            },
            comment_response_button: "コメントに返信",
            stop_followup_reminder_button: "フォローアップリマインダーを停止",
            extend_deadline_by_one_day_button: "期限を1日延長",
            extend_deadline_by_two_days_button: "期限を2日延長",
            extend_deadline_by_one_week_button: "期限を1週間延長",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `あなたがウォッチしているタスク **${id}** ${taskTitle} が更新されました。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。`;
            },
            watcher_notification_footer: "このタスクの通知を無効にするには \"/task unwatch\" コマンドを使用してください。",
            watcher_embed_title(id: string): string {
                return `タスク ${id} が更新されました`;
            },
            milestone_due_notification(guildName: string, guildId: string, milestoneName: string): string {
                return `マイルストーン **${milestoneName}** の期限が6時間以内に迫っています。[${guildName}](https://discord.com/channels/${guildId}) サーバーで確認できます。完了すべきタスクがあります。`;
            },
            status_todo: "未着手",
            status_in_progress: "進行中",
            status_done: "完了"
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "期限",
            assignees_field: "割り当て先",
            status_field: "ステータス",
            todos_field: "Todo",
            delete_at_field: "削除予定日時",
            project_field: "プロジェクト",
            topic_field: "トピック",
            text_field: "テキスト",
            role_field: "役職",
            permission_field: "権限",
            user_field: "ユーザー",
            preset_field: "プリセット",
            priority_field: "優先度",
            label_field: "ラベル",
            personal_field: "個人",
            manager_field: "マネージャー",
            repeat_interval_field: "繰り返し間隔（日単位）",
            repeat_end_date_field: "繰り返し終了日",
            milestone_field: "マイルストーン",
            due_date_field: "期限日",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "未着手";
                    case 1:
                        return "進行中";
                    case 2:
                        return "完了";
                    default:
                        return "不明";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `タスク ${id} の期限`;
                },
                description(id: string, deadline: string): string {
                    return `タスク **${id}** の期限は ${deadline} です。`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `タスク ${id} が削除されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が削除されました。`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `タスク ${id} が繰り返されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が繰り返され、状態が「未着手」に設定されました。`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `タスク ${id} が作成されました。`;
                },
                description(task_text: string, id: string): string {
                    return `タスク ${id} が作成されました。テキスト: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `タスク ${id} が更新されました。`;
                },
                description(id: string): string {
                    return `タスク ${id} が更新され、以下のデータが変更されました。`;
                }
            },
            project_created: {
                title: "プロジェクトが作成されました",
                description(projectName: string): string {
                    return `プロジェクト ${projectName} が作成されました`;
                }
            },
            project_deleted: {
                title: "プロジェクトが削除されました",
                description(projectName: string): string {
                    return `プロジェクト ${projectName} が削除されました`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `タスク ${id} のステータスが変更されました`;
                }
            },
            permission_granted: {
                title: "権限が付与されました",
            },
            permission_revoked: {
                title: "権限が取り消されました",
            },
            preset_applied: {
                title: "プリセットが適用されました",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `タスク ${id} の期限が過ぎています`;
                }
            },
            project_updated: {
                title: "プロジェクトが更新されました",
                description(name: string): string {
                    return `プロジェクト ${name} が更新されました`;
                }
            },
            test_message: {
                title: "テストメッセージ",
                description: "このメッセージが表示されている場合、Webhook は正常に動作しており、ログ記録が有効になっています。"
            },
            comment_added: {
                title(id: string): string {
                    return `タスク ${id} にコメントが追加されました`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `タスク ${id} からコメントが削除されました`;
                }
            },
            topic_created: {
                title: "トピックが作成されました",
                description(name: string): string {
                    return `トピック ${name} が作成されました`;
                }
            },
            topic_updated: {
                title: "トピックが更新されました",
                description(name: string): string {
                    return `トピック ${name} が更新されました`;
                }
            },
            topic_deleted: {
                title: "トピックが削除されました",
                description(name: string): string {
                    return `トピック ${name} が削除されました`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `ドキュメント ${id} が作成されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が作成されました`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `ドキュメント ${id} が更新されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が更新されました`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `ドキュメント ${id} が削除されました`;
                },
                description(name: string): string {
                    return `ドキュメント ${name} が削除されました`;
                }
            },
            label_created: {
                title: "ラベルが作成されました",
                description(name: string): string {
                    return `ラベル ${name} が作成されました`;
                }
            },
            label_updated: {
                title: "ラベルが更新されました",
                description(name: string): string {
                    return `ラベル ${name} が更新されました`;
                }
            },
            label_deleted: {
                title: "ラベルが削除されました",
                description(name: string): string {
                    return `ラベル ${name} が削除されました`;
                }
            },
            attachments_field: "添付ファイル",
            milestone_created: {
                title: "マイルストーンが作成されました",
            },
            milestone_updated: {
                title: "マイルストーンが更新されました",
            },
            milestone_deleted: {
                title: "マイルストーンが削除されました",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string,): string {
                return `もうすぐイベント (${id}) **${name}** が ${durationTillEventMinutes} 分後に、${startTime} に [${guildName}](https://discord.com/channels/${guildId}) で開始されます。`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `あなたはイベント ${eventId} に <@${inviterId}> から招待されました: **${eventName}** が ${start} に開始し、${end} に終了します。\n-# すべての日付は ${timezone} タイムゾーンで計算されています。サーバー全体のタイムゾーンを変更するには「/settings timezone」を使用するか、あなた自身のタイムゾーンを変更するには「/preferences timezone」を使用してください。`;
                },
                accept_button: "承認",
                deny_button: "拒否"
            },
            edit_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string, timezone: string): string {
                    return `<@${inviterId}> がイベント ${eventId} を更新しました: **${eventName}** が ${start} に開始し、${end} に終了します。\n-# すべての日付は ${timezone} タイムゾーンで計算されています。サーバー全体のタイムゾーンを変更するには「/settings timezone」を使用するか、あなた自身のタイムゾーンを変更するには「/preferences timezone」を使用してください。`
                }
            }
        },
        premium_granted_notification(guildId: string, guildName: string): string {
            return `おめでとうございます！サーバー [${guildName}](<https://discord.com/channels/${guildId}>) のプレミアム席に配置されました。これにより、[プレミアム機能](<https://bnder.net/pricing>) にアクセスできるようになりました。楽しんでください！`;
        },
        payment_failed_notification(guildId: string, guildName: string, customerPortalLink: string): string {
            return `サーバー [${guildName}](https://discord.com/channels/${guildId}) の1つ以上のプレミアム席の支払いに失敗しました。支払い情報を確認し、再度支払いを試みるには、[こちらをクリック](${customerPortalLink})してください。`;
        },
        files: {
            file_shared_notification(guildName: string, guildId: string, fileName: string, userId: string): string {
                return `ファイル **${fileName}** がサーバー [${guildName}](https://discord.com/channels/${guildId}) で <@${userId}> によって共有されました。`;
            },
            folder_shared_notification(guildName: string, guildId: string, folderName: string, userId: string): string {
                return `フォルダ **${folderName}** がサーバー [${guildName}](https://discord.com/channels/${guildId}) で <@${userId}> によって共有されました。`;
            }
        },
        self_data_download_ready: "あなたのデータはダウンロード準備が整いました。[アプリ](<https://bnder.net/app/>) からダウンロードできます。ダウンロードリンクは2週間有効です。"
    }
}