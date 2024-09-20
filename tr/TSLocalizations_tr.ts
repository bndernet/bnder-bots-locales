import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_tr {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string, taskTitle: string): string {
                return `Görev **${id}** ${taskTitle} için son tarih sunucu [${guildName}](https://discord.com/channels/${guildId})'da ${deadline} tarihinde sona erecektir.`;
            },
            assigned_notification(guildName: string, guildId: string, id: string, taskText: string): string {
                return `Sunucuda **${id}** ${taskText} görevine atandınız [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Görev ${id} atandı`;
            },
            assigned_embed_footer: "Bu bildirimler sunucu yöneticisi tarafından \"/preferences direct_messages\" komutu kullanılarak devre dışı bırakılabilir.",
            assigned_embed_button_in_progress: "Devam ediyor",
            assigned_embed_button_done: "Yapıldı",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `Görev **${id}** için son teslim tarihi sunucuda [${guildName}](https://discord.com/channels/${guildId}) geçmiş`;
            },
            repeat_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Görev **${id}** ${taskTitle} atandığınız sunucu tekrarlandı ve [${guildName}](https://discord.com/channels/${guildId}) sunucusunda tekrar yapılması gerekiyor.`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Görev ${id} tekrarlandı`;
            },
            deadline_alert: "Görevin son teslim tarihi",
            commented_embed_title(id: string): string {
                return `Göreve yorum eklendi: ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Sunucuda [${guildName}](https://discord.com/channels/${guildId}) bir göreve ${author} tarafından yorum eklendi: ${commentText}`;
            },
            comment_response_button: "Yoruma yanıt ver",
            stop_followup_reminder_button: "Takip hatırlatmasını durdur",
            extend_deadline_by_one_day_button: "Son teslim tarihini 1 gün uzatın",
            extend_deadline_by_two_days_button: "Son teslim tarihini 2 gün uzatın",
            extend_deadline_by_one_week_button: "Son teslim tarihini 1 hafta uzatın",
            watcher_notification(guildName: string, guildId: string, id: string, taskTitle: string): string {
                return `Görev **${id}** ${taskTitle} sunucuda izlediğiniz [${guildName}](https://discord.com/channels/${guildId}) değişti:`;
            },
            watcher_notification_footer: "“/task unwatch” komutunu kullanarak bu görev için bildirimleri devre dışı bırakın",
            watcher_embed_title(id: string): string {
                return `Görev ${id} güncellendi`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Son teslim tarihi",
            assignees_field: "Atananlar",
            status_field: "Durum",
            subtasks_field: "Alt görevler",
            delete_at_field: "Silinme tarihi",
            text_field: "Metin",
            project_field: "Proje",
            topic_field: "Konu",
            role_field: "Rol",
            permission_field: "İzin",
            user_field: "Kullanıcı",
            preset_field: "Ön ayar",
            priority_field: "Öncelik",
            label_field: "Etiket",
            personal_field: "Kişisel",
            manager_field: "Yönetici",
            repeat_interval_field: "Gün cinsinden tekrar aralığı",
            repeat_end_date_field: "Tekrar bitiş tarihi",
            milestone_field: "Kilometre taşı",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "Devam ediyor";
                    case 2:
                        return "Yapıldı";
                    default:
                        return "Bilinmiyor";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi`;
                },
                description(id: string, deadline: string): string {
                    return `Görev **${id}** için son teslim tarihi ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Görev ${id} silindi.`;
                },
                description(id: string): string {
                    return `Görev ${id} çöpten silindi.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Görev ${id} tekrarlandı.`;
                },
                description(id: string): string {
                    return `Görev ${id} tekrarlandı ve durum todo olarak ayarlandı.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Görev ${id} oluşturuldu.`;
                },
                description(task_text: string, id: string): string {
                    return `Görev ${id} metinle oluşturuldu: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Görev ${id} güncellendi.`;
                },
                description(id: string): string {
                    return `Görev ${id} güncellendi ve aşağıdaki veriler değiştirildi.`;
                }
            },
            project_created: {
                title: "Proje oluşturuldu",
                description(projectName: string): string {
                    return `Proje ${projectName} oluşturuldu`;
                }
            },
            project_deleted: {
                title: "Proje silindi",
                description(projectName: string): string {
                    return `Proje ${projectName} silindi`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Görev ${id} durumu değişti`;
                }
            },
            permission_granted: {
                title: "İzin verildi",
            },
            permission_revoked: {
                title: "İzin geri alındı",
            },
            preset_applied: {
                title: "Ön ayar uygulandı",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Görev ${id} için son teslim tarihi geçmişti`;
                }
            },
            project_updated: {
                title: "Proje güncellendi",
                description(name: string): string {
                    return `Proje ${name} güncellendi`;
                }
            },
            test_message: {
                title: "Bu bir test mesajıdır",
                description: "Bu mesajı görüyorsanız, web kancası doğru çalışıyor ve günlüğe kayıt etme etkin."
            },
            comment_added: {
                title(id: string): string {
                    return `Yorum eklendi: ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Yorum silindi: ${id}`;
                }
            },
            topic_created: {
                title: "Konu oluşturuldu",
                description(name: string): string {
                    return `Konu ${name} oluşturuldu`;
                }
            },
            topic_updated: {
                title: "Konu güncellendi",
                description(name: string): string {
                    return `Konu ${name} güncellendi`;
                }
            },
            topic_deleted: {
                title: "Konu silindi",
                description(name: string): string {
                    return `Konu ${name} silindi`;
                }
            },
            document_created: {
                title(id: string): string {
                    return `Belge oluşturuldu: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} oluşturuldu`;
                }
            },
            document_updated: {
                title(id: string): string {
                    return `Belge güncellendi: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} güncellendi`;
                }
            },
            document_deleted: {
                title(id: string): string {
                    return `Belge silindi: ${id}`;
                },
                description(name: string): string {
                    return `Belge ${name} silindi`;
                }
            },
            label_created: {
                title: "Etiket oluşturuldu",
                description(name: string): string {
                    return `Etiket ${name} oluşturuldu`;
                }
            },
            label_updated: {
                title: "Etiket güncellendi",
                description(name: string): string {
                    return `Etiket ${name} güncellendi`;
                }
            },
            label_deleted: {
                title: "Etiket silindi",
                description(name: string): string {
                    return `Etiket ${name} silindi`;
                }
            },
            attachments_field: "Ekler",
            milestone_created: {
                title: "Kilometre taşı oluşturuldu",
            },
            milestone_updated: {
                title: "Kilometre taşı güncellendi",
            },
            milestone_deleted: {
                title: "Kilometre taşı silindi",
            },
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `Yaklaşan etkinlik (${id}: ${name}) ${durationTillEventMinutes} dakika içinde [${guildName}](https://discord.com/channels/${guildId}) sunucusunda başlayacak.`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `<@${inviterId}> sizi **${eventId}** etkinliğine davet etti: **${eventName}** (${start} - ${end})`;
                },
                accept_button: "Kabul et",
                deny_button: "Reddet"
            }
        },
        premium_granted_notification(guildId: string, guildName: string): string {
            return `Tebrikler! Sunucu [${guildName}](<https://discord.com/channels/${guildId}>)'de premium bir koltuğa yerleştirildiniz. Bu, artık [premium özelliklere](<https://bnder.net/pricing>) erişiminiz olduğu anlamına gelir. Keyfini çıkarın!`;
        }
    }
}